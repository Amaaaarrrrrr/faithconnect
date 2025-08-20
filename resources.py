from flask import Blueprint, request
from flask_restful import Api, Resource
from flask_jwt_extended import jwt_required, get_jwt_identity
from models import db, User, Post, PrayerRequest, Comment
from schemas import PostSchema, PrayerSchema, UserSchema, CommentSchema

api_bp = Blueprint('api', __name__)
api = Api(api_bp)

post_schema = PostSchema()
posts_schema = PostSchema(many=True)
prayer_schema = PrayerSchema()
prayers_schema = PrayerSchema(many=True)
user_schema = UserSchema()
comment_schema = CommentSchema()
comments_schema = CommentSchema(many=True)


# Posts
class PostListResource(Resource):
    def get(self):
        posts = Post.query.order_by(Post.timestamp.desc()).all()
        return posts_schema.dump(posts), 200

    @jwt_required()
    def post(self):
        data = request.get_json()
        errors = post_schema.validate(data)
        if errors:
            return errors, 400

        current_user_id = get_jwt_identity()
        new_post = Post(
            title=data['title'],
            content=data['content'],
            type=data.get('type', 'devotion'),
            user_id=current_user_id
        )
        db.session.add(new_post)
        db.session.commit()

        return post_schema.dump(new_post), 201


class PostResource(Resource):
    def get(self, id):
        post = Post.query.get_or_404(id)
        return post_schema.dump(post), 200


class PostLikeResource(Resource):
    @jwt_required()
    def patch(self, id):
        post = Post.query.get_or_404(id)
        post.likes += 1
        db.session.commit()
        return {"message": "Post liked", "likes": post.likes}, 200


class PostCommentResource(Resource):
    @jwt_required()
    def post(self, id):
        post = Post.query.get_or_404(id)
        data = request.get_json()
        if 'content' not in data or not data['content'].strip():
            return {"error": "Comment content required"}, 400

        current_user_id = get_jwt_identity()
        new_comment = Comment(
            content=data['content'],
            user_id=current_user_id,
            post_id=post.id
        )
        db.session.add(new_comment)
        db.session.commit()

        return comment_schema.dump(new_comment), 201


# Prayer Wall
class PrayerListResource(Resource):
    def get(self):
        prayers = PrayerRequest.query.order_by(PrayerRequest.timestamp.desc()).all()
        return prayers_schema.dump(prayers), 200

    @jwt_required()
    def post(self):
        data = request.get_json()
        errors = prayer_schema.validate(data)
        if errors:
            return errors, 400

        current_user_id = get_jwt_identity()
        new_prayer = PrayerRequest(
            title=data['title'],
            description=data['description'],
            user_id=current_user_id
        )
        db.session.add(new_prayer)
        db.session.commit()

        return prayer_schema.dump(new_prayer), 201


class PrayerResource(Resource):
    @jwt_required()
    def patch(self, id):
        prayer = PrayerRequest.query.get_or_404(id)
        prayer.prayed_count += 1
        db.session.commit()
        return {"message": "Prayer count incremented", "prayed_count": prayer.prayed_count}, 200


# Users
class UserResource(Resource):
    def get(self, id):
        user = User.query.get_or_404(id)
        return user_schema.dump(user), 200


class UserUpdateResource(Resource):
    @jwt_required()
    def patch(self, id):
        user = User.query.get_or_404(id)
        current_user_id = get_jwt_identity()
        if current_user_id != user.id:
            return {"error": "Unauthorized"}, 403

        data = request.get_json()
        if 'bio' in data:
            user.bio = data['bio']
            db.session.commit()

        return user_schema.dump(user), 200


# Comments
class CommentListResource(Resource):
    def get(self, post_id):
        comments = Comment.query.filter_by(post_id=post_id).order_by(Comment.timestamp.desc()).all()
        return comments_schema.dump(comments), 200


class CommentCreateResource(Resource):
    @jwt_required()
    def post(self, post_id):
        post = Post.query.get_or_404(post_id)
        data = request.get_json()
        if 'content' not in data or not data['content'].strip():
            return {"error": "Comment content required"}, 400

        current_user_id = get_jwt_identity()
        new_comment = Comment(
            content=data['content'],
            user_id=current_user_id,
            post_id=post.id
        )
        db.session.add(new_comment)
        db.session.commit()

        return comment_schema.dump(new_comment), 201


# Add all resources to the api with their endpoints

api.add_resource(PostListResource, '/posts')
api.add_resource(PostResource, '/posts/<int:id>')
api.add_resource(PostLikeResource, '/posts/<int:id>/like')
api.add_resource(PostCommentResource, '/posts/<int:id>/comment')

api.add_resource(PrayerListResource, '/prayers')
api.add_resource(PrayerResource, '/prayers/<int:id>/pray')

api.add_resource(UserResource, '/users/<int:id>')
api.add_resource(UserUpdateResource, '/users/<int:id>/update')

api.add_resource(CommentListResource, '/posts/<int:post_id>/comments')
api.add_resource(CommentCreateResource, '/posts/<int:post_id>/comments/create')