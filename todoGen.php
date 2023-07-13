<?php

$names = shell_exec('grep -n -r "TODO" src');

$names = explode(PHP_EOL,$names);
$names = array_filter($names);

$content = [];

foreach($names as $el){
    $el = explode(':', $el);
    $newline = '- [ ] ' . $el[0] . ':' . $el[1] . ': ' . trim(str_replace('*/','',$el[3])) . PHP_EOL;
    $content[] = $newline;
}

$content = implode(PHP_EOL, $content);

file_put_contents('TODO.md', $content, FILE_APPEND);
