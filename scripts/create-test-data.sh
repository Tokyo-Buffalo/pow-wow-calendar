#!/bin/sh

createdb powwowcalendar_test

psql powwowcalendar_test < ./scripts/dump.sql
