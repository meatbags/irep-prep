$files = Get-ChildItem -File "./dist"
$folders = dir -Directory "./presentation"
forEach($folder in $folders) {
  $target = Join-Path -Path $folder.FullName -ChildPath "\dist"
  New-Item -ItemType Directory -Force -Path $target
  foreach ($file in $files) {
    Write-Host "Copying" $file.FullName "to" $target
    Copy-Item $file.FullName -Destination $target
  }
}
