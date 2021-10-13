# ------------------------
# Name: decrypt-tmp.py
# Author: Syed Hasan (@syedhasan009)
# Date: 09-09-2021
# Version: 0.2
# Purpose: Decrypt configurations or encrypted payloads of Sidewinder
# Execution: python3 decrypt-tmp.py encryptedPayload.tmp
# ------------------------

import sys

file = sys.argv[1]

outputFilename = f"decrypted_{file}.tmp"
with open(file, "rb") as filePtr:
    content = filePtr.read()
    xorKey = content[:32]
    otherContent = bytearray(content[32:])

    for i in range(0, len(otherContent)):
        otherContent[i] ^= xorKey[i % 32]

    with open(outputFilename, "wb") as fileObj:
        fileObj.write(otherContent)
