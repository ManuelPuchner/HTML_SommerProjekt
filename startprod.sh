#!/bin/bash
node server.js || echo already running server &
open http://localhost:8080/