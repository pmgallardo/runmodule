---
title: How to remove the "Scanning & repairing Drive" message on Windows 11
contentType: reference
---

You may encounter an issue where Windows 11 displays a "Scanning & Repairing Drive" message every time it boots. This article explains how to resolve this error.

Several solutions are provided below. Try them in order until the issue is resolved.

### Solution 1: Run CHKDSK from a normal startup

Open the Command Prompt (`cmd.exe`) as an administrator and run the following command:

```cmd
chkdsk c: /f
```

Press Y when prompted, then restart your computer.

### Solution 2: disable Fast Startup

The "Fast Startup" feature may be interfering with the repair process. Fast Startup hibernates the system core instead of fully shutting it down. If the drive is marked "dirty," that state gets saved in the hibernation file and reloaded every time you boot, completely bypassing your CHKDSK repairs.

To disable it and allow the repair to run:

1. Open the Start menu, type "Control Panel", and press Enter.
2. Go to Hardware and Sound > Power Options.
3. Click Choose what the power buttons do on the left panel.
4. Click Change settings that are currently unavailable (requires administrator rights).
5. Uncheck Turn on fast startup (recommended).
6. Click Save changes and restart your PC.

Note: Whether this solves the issue or not, you can re-enable Fast Startup afterward by following these same steps.

### Solution 3: run CHKDSK from Advanced Startup

Boot into Advanced Startup: Hold down the Shift key on your keyboard while clicking Restart in the Windows Start menu. Keep holding Shift until you see a blue screen.

Navigate to Troubleshoot > Advanced Options > Command Prompt. The PC will reboot and ask you to select your account and enter your password.

Type the following command and press Enter:

```cmd
chkdsk c: /f /r /
```

The `/x` parameter is crucial here; it forces the volume to dismount, guaranteeing that Windows cannot lock the Master File Table (MFT) and interfere with the repair.

Once the process finishes (which may take an hour or more depending on your drive's speed), type `exit` and select "Continue to Windows 11".

## References

- [Scanning &amp; Repairing Drive error on Windows 11](https://forums.tomshardware.com/threads/scanning-and-repairing-drive-c-every-boot.3762155/). Tom's Hardware.
