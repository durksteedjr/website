#!/bin/sh

source .env

pscale db create $DATABASE_NAME
