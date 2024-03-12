# Manage multiple github account at single machine

This file for setup of multiple github account on single machine.

### Generate key for personal
ssh-keygen -t rsa -C "aadilrana088@gmail.com" -f "aadilrana088"

### Generate key for office
ssh-keygen -t rsa -C "epochbrokers2@gmail.com" -f "epochbrokers2"

### set users email and name for personal account
git config user.email "aadilrana088@gmail.com"\
git config user.name "Mohd Aadil Rana"

### set users email and name for personal account
git config user.email "epochbrokers2@gmail.com"\
git config user.name "Aadil Rana"

### Remove the Existing Remote if exist
git remote remove origin

### For adding to remote (personal)
git remote add origin git@github.com-aadilrana088:aadilrana088/react-complete-guide.git\
Github SSh URL: git@github.com:aadilrana088/react-complete-guide.git

### For adding to remote (office)
git remote add origin git@github.com-epochbrokers2:EIBPL/pl.git\
Github SSh URL: git@github.com:EIBPL/pl.git

### For adding any account
git clone git@github.com-{your-username}:{owner-user-name}/{the-repo-name}.git\
[e.g.] git clone git@github.com-rahul-personal:rahul-personal/TestRepo.git

#### Now you can use push and pull commmand.

Reference: https://gist.github.com/rahularity/86da20fe3858e6b311de068201d279e3
