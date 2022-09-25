#!/usr/bin/env bash

# USAGE: ./update.sh X.X.X (ex: 7.0.0)

DEVICES="apollo cmi lmi umi munch"

if [ -d docs/immensity/overview ]; then
    for device in $DEVICES; do \
        cp docs/immensity/overview/alioth/changelogs/Release-$1.md docs/immensity/overview/$device/changelogs
        cp docs/immensity/overview/alioth/download/Release-$1.md docs/immensity/overview/$device/download
    done
fi
