from marshmallow import fields, validate
from flask_marshmallow import Marshmallow
from models import User, Post, PrayerRequest, Comment

ma = Marshmallow()

class UserSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = User
        load_instance = True
        exclude = ("password",)
    bio = fields.String(allow_none=True)

class PostSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Post
        load_instance = True

    title = fields.String(required=True, validate=validate.Length(min=1))
    content = fields.String(required=True, validate=validate.Length(min=1))
    type = fields.String(required=True, validate=validate.OneOf(["sermon", "devotion", "testimony"]), missing="devotion")
    likes = fields.Integer(dump_only=True)
    timestamp = fields.DateTime(dump_only=True)

class PrayerSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = PrayerRequest
        load_instance = True

    title = fields.String(required=True, validate=validate.Length(min=1))
    description = fields.String(required=True, validate=validate.Length(min=1))
    prayed_count = fields.Integer(dump_only=True)
    timestamp = fields.DateTime(dump_only=True)

class CommentSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Comment
        load_instance = True

    content = fields.String(required=True, validate=validate.Length(min=1))
    timestamp = fields.DateTime(dump_only=True)