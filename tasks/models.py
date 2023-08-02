from django.db import models
from django.utils import timezone


class Task(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    done = models.BooleanField(default=False)
    # Usa DateTimeField en lugar de DateField
    date = models.DateTimeField(blank=True, null=True)

    def __str__(self):
        return self.title

    def set_date_from_string(self, date_string):
        self.date = timezone.datetime.strptime(
            date_string, '%Y-%m-%dT%H:%M:%S.%fZ')
