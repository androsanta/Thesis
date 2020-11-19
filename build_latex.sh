#!/bin/sh

echo "LaTex compilation..."
if ! latexmk -synctex=1 -file-line-error -pdf -outdir=latex.out main >/dev/null 2>&1; then
	echo "LaTex compilation error"
	exit 1
fi
echo "...Done"