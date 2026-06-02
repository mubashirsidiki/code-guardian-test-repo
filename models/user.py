from pydantic import BaseModel

class UserProfile(BaseModel):
    username: str
    email: str
    is_active: bool

    class Config:
        # Deprecated: Config class styling is replaced by ConfigDict in Pydantic v2.
        orm_mode = True
        allow_population_by_field_name = True
