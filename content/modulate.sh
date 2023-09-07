#!/bin/bash


mkdir -p ./generated
for I in {1..200}
do
  convert ./source.png -modulate 100,100,${I} ./generated/${I}-background.png
  convert ./background.png ./generated/${I}-background.png -gravity center -compose over -composite ./generated/${I}
  rm ./generated/${I}-background.png
done
