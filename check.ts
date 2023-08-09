n=10 #Page No.
teamslug='mobank'
#Won't able to get child teams repo.
for i in $( seq 1 $n)
do 
  curl \
  -H "Accept: application/vnd.github.v3+json" \
  -i -H "Authorization: token ghp_BsivCRxInpcp2wB6AXbZAs0Yz9Vqyo2MY6f8" \
  https://apnagit.rblbank.com/api/v3/orgs/RBL/teams/$teamslug/repos?page=${i}| grep -w full_name 
  
done
