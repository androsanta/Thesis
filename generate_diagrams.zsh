#! /bin/zsh

if ! docker info >/dev/null 2>&1; then
    echo "Docker is not running"
    exit 1
fi

echo "Generating Uml diagram files..."
for file in source/uml/*.puml; do
    file_name=$(basename $file .puml)
    output="source/diagrams/${file_name}.png"
    output_tmp="source/diagrams/${file_name}.temp.png"
    cat $file |docker run --rm -i think/plantuml -tpng > $output_tmp
    if [ $? -eq 0 ]; then
        cp $output_tmp $output
    else
        echo "error, skipping $file_name"
    fi
    rm $output_tmp
    echo $file_name
done
echo "...Done"