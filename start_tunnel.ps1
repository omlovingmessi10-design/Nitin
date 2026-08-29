# Persistent live tunnel runner for public HTTPS access
while ($true) {
    Write-Output "Connecting to localhost.run..."
    ssh -o StrictHostKeyChecking=no -o ServerAliveInterval=15 -o ServerAliveCountMax=3 -R 80:localhost:8080 nokey@localhost.run
    Start-Sleep -Seconds 2
}
