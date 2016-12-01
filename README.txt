This is plugin code for Thunderbird.
It is available on 
https://addons.mozilla.org/en-US/thunderbird/addon/fixlink/?src=search

scripts/mkxpi creates the XPI files needed to redeploy this on Thunderbird add on. 

There is a lot of structure for the XPI but the actual code is simple and just tin one file :
chrome/content/button.js

the onload function is used to perform the fix which is a simple substitution. 

If MASFLOW change name or server this may need fixing.


