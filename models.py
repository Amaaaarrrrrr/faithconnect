from datetime import datetime
from flask_sqlalchemy import SQLAlchemy
from extensions import db




#user model
class User (db.Model):
    _tablename_="users"
    id=db.Column (db.Integer,primary_key=True)
    email=db.Column(db.String(200),unique=True ,nullable=False)
    password=db.Column (db.String (128),nullable=False)
    role=db.Column(db.String(20),default="user",nullable=False)
    created_at=db.Column (db.Datetime ,default=datetime.utcnow)



    #relationships
    posts=db.relationship ("Post",backref="author",lazy=True,cascade="all,delete-orphan")
    comments=db.relationship ("Comment",backref="author",lazy=True,cascade="all,delete-orphan")
    prayers=db.relationship ("PrayerRequest",backref="author",lazy=True ,cascade="all,delete-orphan")





    def to_dict(self):
        return {
            "id": self.id,
            "username": self.username
        }


class Post (db.Model):
    _tablename_="posts"
    id=db.Column (db.Integer,primary_key=True)
    title=db.Column (db.String(200),nullable=False)
    content=db.Column (db.Text,nullable=False)
    type=db.Column (db.STring (50) , nullable=False)
    likes=db.Column ( db.Intger ,default =0)
    timestamp=db.Column (db.DateTime ,default=datetime.utcnow)
    user_id=db.Column (db.integer ,db.ForeignKey("users.id"),nullable=False)


    #relationship

    comments =db.relationship ("Comment",backref="post",lazy=True,cascade="all,delete-orphan")




    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "content": self.content,
            "created_at": self.created_at.isoformat(),
            "user_id": self.user_id
        }





class PrayerRequest (db.Model):
    _tablename_="prayer_requests"
    id=db.Column (db.Integer,primary_key=True)
    title=db.Column (db.String(200),nullable=False)
    description=db.Column (db.Text , nullable=False)
    prayed_count=db.Column (db.Integer ,default=0)
    timestamp=db.Column (db.DateTime ,default=datetime.utcnow)
    user_id=db.Column (db.Integer ,db.ForeignKey("users.id"),nullable=False)



    def to_dict(self):
        return {
            "id": self.id,
            "request": self.request,
            "created_at": self.created_at.isoformat(),
            "user_id": self.user_id
        }





class Comment (db.Model):
    _tablename_="comments"
    id=db.Column (db.Integer,primary_key=True)
    content=db.Column (db.Text , nullable=False)
    timestamp=db.Column (db.DateTime ,default=datetime.utcnow)
    post_id=db.Column (db.Integer ,db.ForeignKey("posts.id"),nullable=False)
    user_id=db.Column (db.Integer ,db.ForeignKey("users.id"),nullable=False)




    def to_dict(self):
        return {
            "id": self.id,
            "text": self.text,
            "created_at": self.created_at.isoformat(),
            "user_id": self.user_id,
            "post_id": self.post_id
        }