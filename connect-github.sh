# Script para conectar Haitiart con GitHub
# Ejecuta este script después de crear el repositorio en GitHub

# PASO 1: Reemplaza esta URL con la de tu repositorio GitHub
GITHUB_URL="https://github.com/TU_USUARIO/haitiart.git"

# PASO 2: Ejecuta estos comandos en terminal:
echo "Ejecutando comandos para conectar con GitHub..."
echo "1. Agregando repositorio remoto..."
git remote add origin $GITHUB_URL

echo "2. Verificando conexión..."
git remote -v

echo "3. Hacer push inicial..."
git push -u origin main

echo "¡Conexión completada!"
echo "Tu repositorio Haitiart está ahora en GitHub"