from typing import List

from project.category import Category
from project.document import Document
from project.topic import Topic


class Storage:

    def __init__(self):
        self.categories: List[Category] = []
        self.topics: List[Topic] = []
        self.documents: List[Document] = []

    def add_category(self, category: Category):
        if category not in self.categories:
            self.categories.append(category)

    def add_topic(self, topic: Topic):
        if topic not in self.topics:
            self.topics.append(topic)

    def add_document(self, document: Document):
        if document not in self.documents:
            self.documents.append(document)

    def edit_category(self, category_id: int, new_name: str):
        category = next((c for c in self.categories if c.id == category_id), None)
        category.name = new_name

    def edit_topic(self, topic_id: int, new_topic: str, new_storage_folder: str):
        topic = next((t for t in self.topics if t.id == topic_id), None)
        topic.topic = new_topic
        topic.storage_folder = new_storage_folder

    def edit_document(self, document_id: int, new_file_name: str):
        document = next((d for d in self.documents if d.id == document_id), None)
        document.file_name = new_file_name

    def delete_category(self, category_id):
        category = next((c for c in self.categories if c.id == category_id), None)
        self.categories.remove(category)

    def delete_topic(self, topic_id):
        topic = next((t for t in self.topics if t.id == topic_id), None)
        self.topics.remove(topic)

    def delete_document(self, document_id):
        document = next((d for d in self.documents if d.id == document_id), None)
        self.documents.remove(document)

    def get_document(self, document_id):
        document = next((d for d in self.documents if d.id == document_id), None)
        return document

    def __repr__(self):
        result = []
        for document in self.documents:
            result.append(document.__repr__())
        return '\n'.join(result)


