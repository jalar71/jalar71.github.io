---
title: Power in Powershell
date: 2026-01-28 13:16:00 -0400
categories: [Powershell]
tags: [powershell, tryhackme, microsoft]     # TAG names should always be lowercase
---
#  Power in PowerShell — Notes From My TryHackMe Journey

I recently finished the Command Line Essentials room on TryHackMe for PowerShell and honestly I couldn’t fathom how powerful this tool really is.

It’s easily one of the most useful scripting environments anyone in IT or cybersecurity can learn to make their daily menial work easier. 

---

## Why Microsoft developed PowerShell?

For years Command Prompt was the default Windows shell. But as Windows started being used in larger more complex enterprise environments its limitations became obvious.

Microsoft felt the need to develop a more powerful command language to address that hence PowerShell was born.

Unlike CMD which mostly works with plain text, PowerShell works with objects and that puts the **POWER** in PowerShell.

---

## What are Objects?

To really understand PowerShell we need to understand what an **object** is.

In programming, an object represents something with:

- **Properties** → characteristics  
- **Methods** → actions  
  
TryHackMe did a wonderful job explaining the concept using an example of a car:

- Properties: `Color`, `Model`, `FuelLevel`
- Methods: `Drive()`, `HonkHorn()`, `Refuel()`

In Powershell Objects are just like the car, It is a *thing* that comes with:

→ Facts about it(properties)

→ Things it can do(methods)

---

##  Basic Syntax → Verb-Noun

- PowerShell commands are called **cmdlets** (pronounced *command-lets*).
- `Cmdlets` follow a consistent **Verb-Noun** naming convention. This structure makes it easy to understand what each cmdlets does. The **verb** describes the action and the **Noun** specifies the object on which action is performed.
Example of the syntax: 
- `Get-Content` → retrieves (gets) file contents  
- `Console.Set-Location` → changes (sets) the current directory  


---


### Let's Look at some Basic Commands:

Lists all cmdlets, functions, scripts, and aliases in your session:

```powershell
Get-Command
```
Another essential tool to know in PowerShell is:
```powershell
Get-Help
```
Who doesn't need help when working in cybersecurity? This command provides detailed information about cmdlets, including using, parameters and examples.

When developing PowerShell the developers at Microsoft were kind enough to make the transition easier for IT professionals which are shortcuts for cmdlets.
```powershell
Get-Alias
```
---
### Commands for Navigating the File System and Working with Files

```powershell
Get-ChildItem #lists the files and directories in a location set by -Path parameter.
```
```powershell
Set-Location #Changes the current directory
```
```powershell
New-Item -Path #create an item in PowerShell
```
```powershell
Remove-Item -Path #the name says it all
```
---
### Piping, Filtering and Sorting Data
Piping in PowerShell is even more herculean because it passes **objects** rather than just text. Which helps the program interact with the data. 

- If you want to get a list of files in a directory and the sort them by size, you could use the following:
```powershell
Get-ChildItem | Sort-Object Length
```
- To filter objects based on specified conditions, returning only those that meet criteria, we can use `Where-Object` cmdlet.
```powershell
Get-ChildItem | Where-Object -Property "Extension" -eq  ".txt"
```
- Another example of objects so filtering can be done by selecting properties that match (-like) a specified pattern:
```powershell
Get-ChildItem | Where-Object -Property "Name" -like "ship*"
```
### System & Network Information

Who doesn't want detailed computer and network information by just a simple command? Instead of hunting for this information in Control Panel or "Settings" app in newer versions of Windows.

- Retrieve comprehensive system information: operating system info, hardware specifications, BIOS details and more.
```powershell
Get-ComputerInfo
```
- List all the local user accounts on the system. 
```powershell
Get-LocalUser
```
- Provides detailed information about the network interfaces on the system: IP address, DNS servers and gateway Configurations.
```powershell
Get-NetIPConfiguration
```
- See details for all IP address configured on the system, including those that are **not currently active**.
```powershell
Get-NetIPAddress
```
### Real-Time System Analysis
In Cyber Security I think these tools are more than substantial. How are you going to find what culprit programs are running without your knowledge. Below is the list of thes command that make life easier. 
- Get a detailed view of all currently running processes, including CPU and memory usage.
```powershell
Get-Process
```
- Retrieve information about the status of services on the machine, such as which services are running, stopped or paused.
```powershell
Get-Service
```
- Display current TCP connections, giving insights into both local and remote endpoints. Particularly handu during an **incident response or malware analysis analysis task, it can help uncover hidden backdoors
```powershell
Get-NetTCPConnection
```
- Generate File hashes, which is particularly valuable in incident response, threat hunting and malware analysis.
```powershell
Get-FileHash
```




