# CodeGuardian AI Platform - Test Repository

This is a lightweight, realistic test repository designed specifically for verifying and testing the CodeGuardian AI platform. It contains sample modules using deprecated or legacy libraries (LangChain, Pydantic, Stripe) that trigger optimization and code modernization pipelines.

## Project Structure

- **models/**
  - `user.py`: Contains a legacy Pydantic v1 model utilizing the deprecated `class Config` structure, which needs to be refactored into modern Pydantic v2 `ConfigDict` configuration styling.

- **services/**
  - `ai_service.py`: Contains a legacy LangChain pattern utilizing deprecated direct model invocation and legacy imports, which needs to be refactored into the modern `.invoke()` standard.

- **payments/**
  - `stripe_service.js`: Contains legacy Stripe service calls utilizing the deprecated `stripe.charges.create` endpoint, which should be updated to `stripe.paymentIntents.create`.

## Testing the Platform

Use the path to this repository inside the CodeGuardian dashboard to scan and verify the multi-agent code analysis, rule validation, review rejection flow, and eventual automatic pull request delivery loops.
