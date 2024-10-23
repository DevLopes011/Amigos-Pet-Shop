./7za.exe a "./lambda.zip" . | out-null

aws lambda update-function-code --function-name "message-amigos-petshop" --zip-file "fileb://./lambda.zip" --region "us-east-1"

Remove-Item -Path "./lambda.zip" -Force