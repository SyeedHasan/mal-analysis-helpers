
## Sidewinder Decryptors
Collection of scripts I've written to decrypt implant configurations, obfuscated payloads, or decrypt the .NET RAT of Sidewinder

### decrypt-tmp.py
Decrypt the .NET RAT:
```python3 decrypt-tmp.py filename.tmp```

---

### deobfuscate-hta.py
What does it do:
- Deobfuscate the function calls into plaintext strings
- Deobfuscation functions are actually in Deobfuscator.js (manual rewrite was added hours of automation)

Steps:
- Dump the 1A.js file
- Copy the ```key``` variable and the functions being called (usually named, ```keeee```)
  - Modify the function name in Deobfuscator.js (currently, it's set to "JXNHptZI")
- Identify the function which is the second XOR decryptor (usually calls the B64 decoder and XOR decryptor from inside of it)
- Execute the main python script 

Deobfuscate the function calls in the stage-I HTA file using:
```python3 deobfuscate-hta.py {filename}.js {XOR_DECODING_FUNCTION_NAME}```

Example:
```python3 deobfuscate-hta.py 1a.js JXNHptZI```

Output:
- Modifies the original malware file (no copies; better make it yourself)
- Creates two files in the same folder; ObfuscatedCalls.txt and DeobfuscatedCalls.txt

#### Requirements
- Node (on the system)
    - Do add it to your PATH for seamless execution
- All files should be in the same folder as the script
  - No support for dynamic path generation

---

### Note
There's no error-checking of any kind; neither have I used any dependency here. So, any errors should be resolved by manual debugging.

Do feel free to open up issues if you're facing difficulty. 