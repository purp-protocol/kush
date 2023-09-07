#!/bin/bash

mkdir -p ./metadata
for I in {1..200}
do
  export IPFS_CID=$(ipfs add -q --only-hash ./generated/$I | ipfs cid base32)
  export TOKEN_ID=$I
  cat ./metadata.json.tmpl | envsubst | tee ./metadata/${I}
done
