from django.db import models


class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    technologies = models.CharField(max_length=300)
    github_url = models.URLField(blank=True)
    live_url = models.URLField(blank=True)
    image_url = models.URLField(blank=True)
    video_url = models.URLField(blank=True)
    order = models.IntegerField(default=0) 
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['order']  # Add this

    def __str__(self):
        return self.title