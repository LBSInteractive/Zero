@ECHO off
@ECHO -Instalacion completa-
@COLOR B0
@ECHO Al realizar esta instalacion se eliminara la carpeta node_modules en caso de existir
@ECHO Si desea realizar la instalacion oprima cualquier tecla en caso contrario cierre de inmediato el Batch
@PAUSE
@CLS
@ECHO Verificando carpeta node_modules
@IF EXIST "./node_modules" (
@CLS
@ECHO Carpeta encontrada
@TIMEOUT 3
@ECHO Eliminaremos la carpeta node_modules
@rmdir /S node_modules
@CLS
@ECHO Eliminada
@TIMEOUT 1
@CLS
@ECHO Instalando
@npm install
@CLS
@ECHO Proceso finalizado correctamente
@PAUSE
) ELSE (
@CLS
@ECHO Instalando
@npm install
@CLS
@ECHO Proceso finalizado correctamente
@PAUSE
)
