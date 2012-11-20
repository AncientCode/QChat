from django.db import models
from django.contrib.auth.models import User

class Room(models.Model):
    name = models.CharField(max_length=20)
    users = models.ManyToManyField(User)
    
class Message(models.Model):
    id = models.IntegerField(primary_key=True)
    user = models.ForeignKey(User)
    room = models.ForeignKey(Room)
    contents = models.TextField()
