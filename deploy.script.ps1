$region = "us-east-1"
$bucket = "deploy.bucket.amigos"
$key = "node/amigos/lambda.zip"
$function_name = "message-amigos-petshop"

Write-Host "Iniciando o Deploy Manual" -ForegroundColor DarkGreen
Write-Host "*************************" -ForegroundColor DarkBlue
./7za.exe a "./lambda.zip" . | out-null
./7za.exe d "./lambda.zip" "node_modules" -r | out-null
./7za.exe d "./lambda.zip" "src/View" -r | out-null
./7za.exe d "./lambda.zip" ".git" -r | out-null

Write-Host "Iniciando Upload para o S3" -ForegroundColor DarkGreen
Write-Host "*************************" -ForegroundColor DarkBlue
aws s3 cp "./lambda.zip" "s3://$bucket/$key"
Write-Host "Iniciando Atalização do Lambda" -ForegroundColor DarkGreen
Write-Host "*************************" -ForegroundColor DarkBlue

aws lambda update-function-code --function-name $function_name --s3-bucket $bucket --s3-key $key --region $region | out-null
Write-Host "Finalizado a atalização do Lambda" -ForegroundColor DarkGreen
Write-Host "*************************" -ForegroundColor DarkBlue

Remove-Item -Path "./lambda.zip" -Force