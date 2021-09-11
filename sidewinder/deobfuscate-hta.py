# ------------------------
# Name: deobfuscate-hta.py
# Author: Syed Hasan (@syedhasan009)
# Date: 11-09-2021
# Version: 1.0
# Purpose: Deobfuscate the HTA file and function calls in Sidewinder's stage I HTA
# Execution: python3 deobfuscate-hta.py 1.a JXNHptZI
# Notes: Refer to README for more details
# ------------------------

import sys
import re
import os

filename = sys.argv[1]
decryptorFuncName = sys.argv[2]


def getObfuscatedCalls():
    with open(filename, 'r') as fileObj:
        obfuscatedFuncCalls = []
        content = fileObj.readlines()
        for line in content:
            matches = re.finditer(
                fr'(\b{decryptorFuncName}\b\(").+?("\))', line)
            # match = re.search(f'{decryptorFuncName}\((".*")\)', line)
            if matches is not None:
                for match in matches:
                    # print(match[0])
                    obfuscatedFuncCalls.append(match[0])

        return obfuscatedFuncCalls


def writeObfuscatedFuncCalls(calls):
    with open("ObfuscatedCalls.txt", 'w') as fileObj:
        for call in calls:
            fileObj.write(call)
            fileObj.write('\n')


def replaceObfuscatedCalls():
    allContent = ""
    deobfuscatedCalls = []
    obfuscatedCalls = []

    with open("DeobfuscatedCalls.txt", 'r') as fileObj:
        content = fileObj.readlines()
        for line in content:
            line = line.rstrip('\n')
            deobfuscatedCalls.append(line)

    with open("ObfuscatedCalls.txt", 'r') as fileObj:
        content = fileObj.readlines()
        for line in content:
            line = line.rstrip('\n')
            obfuscatedCalls.append(line)

    with open(filename, 'r') as fileObj:
        allContent = fileObj.read()

    with open(filename, 'w') as fileObj:
        for count, call in enumerate(obfuscatedCalls):
            allContent = allContent.replace(call, deobfuscatedCalls[count])

        fileObj.write(allContent)


calls = getObfuscatedCalls()
command = "node Deobfuscator.js"
writeObfuscatedFuncCalls(calls)
os.system(command)
replaceObfuscatedCalls()
