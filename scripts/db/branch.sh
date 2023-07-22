#!/bin/sh

source .env

pscale branch create $DATABASE_NAME $DATABASE_BRANCH
