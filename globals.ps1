# # # # REQUIRED GLOBAL INSTALLS # # # #
# custom script to run additional missing global installs
#

Write-Host Attempting to install Globals...


# Angular CLI
$isInstalled = npm list -g @angular/cli
if ($isInstalled -match 'empty') {
    Invoke-Expression "npm install -g @angular/cli" -ErrorVariable $errorhandle 
} else {
    Write-Host @angular/cli is already installed...
}
Write-Host Finished Globals!