#! /bin/zsh

if ! docker info >/dev/null 2>&1; then
    echo "Docker is not running"
    exit 1
fi

echo "Generating Uml diagram files..."
for file in source/uml/*.puml; do
    file_name=$(basename $file .puml)
    output="source/diagrams/${file_name}.png"
    cat $file |docker run --rm -i think/plantuml -tpng > $output
    echo $file_name
done
echo "...Done"