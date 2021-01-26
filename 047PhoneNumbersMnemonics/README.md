## Phone Number Mnemonics

- If you open the keypad of your mobile phone, it will likely look like this:

~~~
 ----- ----- ----- 
|  1  |  2  |  3  |
|     | abc | def |
 ----- ----- -----
|  4  |  5  |  6  |
| ghi | jkl | mno |
 ----- ----- ----- 
|  7  |  8  |  9  |
| pqrs| tuv | wxyz|
 ----- ----- -----
      |  0  |
       -----
~~~

- Almost every digit is associated with some letters in the alphabet; this allows certain phone numbers to spell out actual words. Forexample, the phone number 8464747328 can be written as timisgreat; similarly, thephone number 2686463 can be written as antoine or as ant6463.
- It's important to note that a phone number doesn't represent a single sequence of letters, but rather multiple combinations of letters. For instance, the digit 2 can represent three different letters (a, b, and c).
- A mnemonic is defined as a pattern of letters, ideas, or associations that assist in remembering something. Companies often times use a mnemonic for their phone number to make it easier to remember.
- Given a stringified phone number of any non-zero length, write a function that returns all mnemonics for this phone number, in any order.
- Sample input:
    ~~~
    phoneNumber = "1905"
    ~~~
- Sample putput:
    ~~~
    [ 
        "1w0j", 
        "1w0k", 
        "1w0l", 
        "1x0j", 
        "1x0k", 
        "1x0l", 
        "1y0j", 
        "1y0k", 
        "1y0l", 
        "1z0j", 
        "1z0k", 
        "1z0l", 
    ]
    ~~~