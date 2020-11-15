from rest_framework import generics, permissions


class PostList(generics.ListAPIView):
    permission_classes = [permissions.IsAuthenticated]
