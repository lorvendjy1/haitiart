# 🚀 GUÍA FINAL: Conectar Haitiart con GitHub

## PASO 1: Crear Repositorio en GitHub
1. Ve a https://github.com/new
2. Nombre del repositorio: `haitiart`
3. Descripción: `Agencia inmobiliaria Haitiart - Venta de planos`
4. Déjalo público (o privado si prefieres)
5. ⚠️ **NO marques** "Add a README file" ni ".gitignore"
6. Click "Create repository"

## PASO 2: Copiar URL del Repositorio
Después de crear el repositorio, copia la URL HTTPS:
```
https://github.com/TU_USUARIO/haitiart.git
```

## PASO 3: Conectar y Hacer Push
Ejecuta estos comandos en tu terminal:

```bash
# Agregar repositorio remoto (reemplaza TU_USUARIO)
git remote add origin https://github.com/TU_USUARIO/haitiart.git

# Verificar conexión
git remote -v

# Hacer push inicial
git push -u origin main
```

## ✅ Verificación
Después del push, deberías ver tu proyecto en GitHub con:
- 4 commits en el historial
- Todos los archivos del proyecto
- README completo con documentación

## 🔧 Comandos Útiles para el Futuro

```bash
# Ver estado
git status

# Agregar cambios
git add .

# Commitear cambios
git commit -m "Descripción de cambios"

# Push a GitHub
git push

# Pull desde GitHub
git pull
```

¡Tu proyecto Haitiart está listo para GitHub! 🎉