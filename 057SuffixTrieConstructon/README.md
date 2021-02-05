## Suffix Trie Construction

- Write a SuffixTrie class for a Suffix-Trie-like data structure. The class should have a root property set to be the root node of the trie and should support:
    * Creating the trie from a string; this will bedone by calling the populateSuffixTrieFrom method upon class instantiation, which should populate the root of the class.
    * Searching for strings in the trie.
- Note that every string added to the trie should end with the special endSymbol character: "*" .
- Sample input(for creation):
    ~~~
    string = "babc"
    ~~~
- Sample output (for creation):
    ~~~
    // The structure below is the root of the trie.

    {
        "c": {"*": true}, 
        "b": { 
                "c": {"*": true}, 
                "a": {"b": {"c": {"*": true}}}, 
            },
        "a": {"b": {"c": {"*": true}}}, 
    }
    ~~~
- Sample input (for searching in the suffix trie above):
    ~~~
    string = "abc"
    ~~~
- Sample output (for searching in the suffix trie above):
    ~~~
    true
    ~~~