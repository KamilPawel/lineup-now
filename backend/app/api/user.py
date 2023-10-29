from fastapi import APIRouter, HTTPException
import requests

router = APIRouter()


@router.get("/{user_id}/")
async def read_item(user_id: int):
    response = requests.get(f"https://reqres.in/api/users/{user_id}")
    if response.status_code == 404:
        raise HTTPException(status_code=404, detail="User not found")
    elif response.status_code == 503:
        raise HTTPException(status_code=503, detail="Service unavailable")
    return response.json()