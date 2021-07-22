
file = 'LwBFLmM.tmp'
outputFilename = f'decrypted_{file}.tmp'
with open(file, 'rb') as filePtr:
    content = filePtr.read()
    xorKey = content[:32]
    otherContent = bytearray(content[32:])
    
    for i in range(0, len(otherContent)):
        otherContent[i] ^= xorKey[ i % 32 ]

    with open(outputFilename, 'wb') as fileObj:
        fileObj.write(otherContent)