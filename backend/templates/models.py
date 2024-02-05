from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Person(db.Model):
    __tablename__ = 'person'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    telephone_number = db.Column(db.String(20), nullable=False)  # Adding telephone_number column

class Visitor(db.Model):
    __tablename__ = 'visitor'
    id = db.Column(db.Integer, primary_key=True)
    person_id = db.Column(db.Integer, db.ForeignKey('person.id'), nullable=False)
    visit_date = db.Column(db.DateTime)
    left_date = db.Column(db.DateTime)
    telephone_number = db.Column(db.String(20), nullable=False)  # Adding telephone_number column to Visitor
    person = db.relationship('Person', backref=db.backref('visitors', lazy=True))


