# Linux Fundamentals
---
The name "Linux" is actually an umbrella for multiple operating systems that are based on UNIX(another operatin system). Thanks to Linux being open-source, variants of Linux come in all shapes and sizes customized for the purpose of the system is being used for. \
Linux Commands 
| Commands | Description|
|:---|:---|
|`echo`| Output any text that we provide|
|`whoami`| What user we're currently logged in as|
|`ls -a`| List the contect (`-a` flag is used to show the hidden files as well.)|
|`cd`| Change Directory|
|`cat`|Concatenate|
|`pwd`|Present Working Directory |
|`find`| the name says it all|
|`wc`| Word count |
|`grep`| Search in the file for a word or text|
|`su`| Switch User Example: `su user2`|
### Let's Take a look at how `find` could be used
If we know the filename, we can simply use 
```bash
find -name passwords.txt
```
This command will go through every folder in the current directory for that file.
Next if you want to look for all the files which have the `.txt` extension
```bash
find -name *.txt
```
# SHELL OPERATORS
|Operator| What it does?|
|---|---|
|`&`| Allows you to run commands in the background of your terminal|
|`&&`|Allows you to combine multiple commands together in one line of your terminal|
|`>`| Takes the output from a command (such as using `cat` to output file) and direct it elsewhers.|
|`>>`| Appends the output rather than replacing |
# File Creation Commands
|Command|Purpose|
|---|---|
|`touch`| Create File|
|`mkdir`| Make Directory|
|`cp`| copy|
|`mv`| move the file|
|`rm`| Remove the file|
|`file`| Determine what kind of file it is|
|`ls -lh`|Listing permissions of files|
## Common Directories 
|Directory|Purpose|
|---|---|
|`/etc`| stores system files that are used by your operating system.|
|`/var` |stores data that is frequently accessed or written by services or applications running on the system. Example being log files from running services and applications.|
|`/tmp`|stores data that is only needed to be accessed once or twice. One use in pentesting is that any user can write to this folder by default. Meaning once we have access to a machine, it serves as a good place to store things like our enumeration scripts.|
