from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from Fci_App.models.user import User


class LoginView(APIView):

    def post(self, request, *args, **kwargs):
        id = request.data['id']
        passwd = request.data['password']
        usr = User.objects.get(id=id)
        if usr is None:
            return Response(data={"status" : "error", "message" : "User does not exist"}, status=status.HTTP_400_BAD_REQUEST)
        if passwd != usr.password:
            return Response(data={"status" : "error", "message" : "Password is incorrect"}, status=status.HTTP_400_BAD_REQUEST)
        return Response(data={"status" : "success", "id" : usr.id, "username" : usr.username, "dealer_type" : usr.dealer_type, "role" : usr.role, "city" : usr.city, "state" : usr.state}, status=status.HTTP_200_OK)