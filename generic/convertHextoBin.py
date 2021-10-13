# ------------------------
# Name: convertHextoBin.py
# Author: Syed Hasan (@syedhasan009)
# Date: 09-10-2021
# Version: 0.1
# Purpose: Convert hex-encoded payloads to Binary
# Execution: python3 convertHextoBin.py encryptedPayload.tmp
# Usecase:
#   - Confucius' payloads are hex-encoded and converted into a PE on run-time for execution
# ------------------------

import sys
import os

fileName = sys.argv[1]
newFile = f"{fileName}.bin"

with open(fileName, 'r') as fileHandle:
    print("Operating on the file:", fileHandle.name)
    content = fileHandle.readlines()
    hexStrings = content[0]

    try:
        asciiStrings = bytes.fromhex(hexStrings)
    except:
        raise Exception("An unknown error occured during the hex-decode instruction. Retry maybe?")
        os._exit(1)

    with open(newFile, 'wb') as newFile:
        newFile.write(asciiStrings)
        print("Successfully wrote the file:", newFile.name)