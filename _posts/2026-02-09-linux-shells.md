---
title: Linux Shells
date: 2026-02-09 12:41:00 -0400
categories: [Linux]
tags: [linux, bash, zsh, fish]     # TAG names should always be lowercase
---
# Basics of Bash
---
## Bash is not the only one!
Linux offers a few different shells each offering distinguishable features depending how tech savy the user is. The user can select which one to use based off the familiarity and the functionality of the chosen shell.

- 🔍Find out what shell you're using
```bash
echo $SHELL
```
-  📜List down the available shells in your Linux OS type:
```bash
cat /etc/shells
```
---
### Now let's dive into a few popular ones and what do they do:
1. ***Bash***

**Full Name**: `Bourne Again Shell` 
**Scripting**: `Widely compatible with extensive documentation available.`  
**Tab Completion feature offered?** `Yes`  
**Customization offered?** `Basic level`  
**User friendliness?** `less user-friendly yet very popular and widely used.` \
**Syntax highlighting offered?** `Not available`  

2. ***Fish***

**Full Name**: `Friendly Interactive Shell`  
**Scripting**: `Limited features.` \
**Tab Completion feature offered?** `Yes, provides advanced tab completion by giving suggestions based on the previous command.`  \
**Customization offered?** `Offers some customization through interactive tools.` \
**User friendliness?** `Most user-friendly.`  \
**Syntax highlighting offered?** `Yes.` 

3. ***Zsh***

**Full Name**: `Z shell. ` 
**Scripting**: `Excellent level of scripting, combing the traditional capabilities of Bash shell with some extra features.`  
**Tab Completion feature offered?** `Can be extended heavily by using plugins. ` 
**Customization offered?** `Advanced customization through oh-my-zsh framework.`  
**User friendliness?** `less user-friendly yet very popular and widely used. ` 
**Syntax highlighting offered?** `Not available `

---
## Shell Scripting & Components 
### THE SHEBANG (#!)
- Every script **must** start with "#!" and these combination of characters is called a ***shebang***!.
- Shebang "#!" is added at the beginning of the script
- Followed by the name of the interpereter to be used.

Below is an example code:
```bash
# Defining the Interpreter
- Followed by the name of the interpereter to be used., \
#! /bin/bash
echo "Hey, what's your name?"
read name
echo "Welcome, $name"
```
`echo` -> Used to print output \
`read` -> Used to take input and store it in a variable. \
***Now let's make the script executable*** \
```bash
chmod +x first_script.sh
```
Now, how to execute a script? 
```bash
./first_script.sh
```
### 🔁Loops
Let's take another example and see how looping would be done in Bash. \
Below is an example: \
```bash
# Defining the Interpreter
#! /bin/bash
for i in {1..10};
do
echo $i
done
```
### Conditional Statements in Bash:
Learning the "if-statements" in Bash is critical I mean how else can you make decision? \
```bash
#Defining the Interpreter
#! /bin/bash
echo "Please enter your name first:"
if [ "$name" = "Stewart" ]; then
  echo "Welcome Stewart! Here is the secret: pswd"
else
  echo "Sorry! You are not authorized to access the secret"
fi
```
📌 Notes

- Indentation is not required in Bash…

- …but it is strongly recommended for readability.

- Spaces matter inside [ ] test brackets.

- Always quote variables like "$name" to avoid bugs.
No, indentation is **not** needed in bash. 
