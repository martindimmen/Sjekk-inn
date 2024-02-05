from flask import Flask, request, jsonify
from flask_cors import CORS
from datetime import datetime
from models import db, Visitor, Person

app = Flask(__name__)
CORS(app)
app.config.from_object('config')  # Load SQLAlchemy configuration from config.py


@app.route('/api/test', methods=['GET'])
def test():
    return jsonify({'message': 'Hei, velkommen til Ambio Software, hvilken person skal du besøke?'})

@app.route('/add_person', methods=['POST'])
def add_person():
    data = request.get_json()
    new_person = Person(name=data['name'])
    db.session.add(new_person)
    db.session.commit()
    return jsonify({'message': 'New person added'}), 201

@app.route('/add_visitor', methods=['POST'])
def add_visitor():
    data = request.get_json()
    person_id = data.get('person_id')  # Assuming you have a 'person_id' in your request JSON

    person = Person.query.get(person_id)
    if person:
        telephone_number = person.telephone_number
        new_visitor = Visitor(person_id=person_id, visit_date=datetime.utcnow(), telephone_number=telephone_number)
        db.session.add(new_visitor)
        db.session.commit()
        return jsonify({'message': 'New visitor added'}), 201
    else:
        return jsonify({'message': 'Person not found'}), 404

@app.route('/remove_visitor/<int:visitor_id>', methods=['DELETE'])
def remove_visitor(visitor_id):
    visitor = Visitor.query.get(visitor_id)
    if visitor:
        telephone_number = visitor.telephone_number  # You can include this in the response if needed
        db.session.delete(visitor)
        db.session.commit()
        return jsonify({'message': 'Visitor removed', 'telephone_number': telephone_number}), 200
    else:
        return jsonify({'message': 'Visitor not found'}), 404


@app.route('/api/people', methods=['GET'])
def get_all_people():
    all_people = Person.query.all()

    people_data = []

    for person in all_people:
        person_data = {
            'id': person.id,
            'name': person.name,
            'telephone_number': person.telephone_number
        }
        people_data.append(person_data)

    return jsonify(people_data)


@app.route('/api/visitors', methods=['GET'])
def get_all_visitors():
    all_visitors = Visitor.query.all()
    
    visitors_data = []

    for visitor in all_visitors:
        visitor_data = {
            'id': visitor.id,
            'person_id': visitor.person_id,
            'visit_date': visitor.visit_date.strftime('%Y-%m-%d %H:%M:%S'),
            'left_date': visitor.left_date.strftime('%Y-%m-%d %H:%M:%S') if visitor.left_date else None,
            'telephone_number': visitor.telephone_number
        }
        visitors_data.append(visitor_data)

    return jsonify(visitors_data)




if __name__ == '__main__':
    db.init_app(app)  # Initialize the SQLAlchemy app
    with app.app_context():
        db.create_all()  # Create database tables if they don't exist
    app.run(debug=True)
