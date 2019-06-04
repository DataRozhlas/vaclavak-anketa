#%%
import pandas as pd
import json
import unicodedata
import os
import hashlib
#%%
d = pd.DataFrame()
for file in os.listdir('./scratch/'):
    if file == 'cele.xls':
        continue
    tmp = pd.read_excel('./scratch/' + file)
    tmp['red'] = file.split('.')[0]
    d = d.append(tmp, ignore_index=True)

#%%
d.to_excel('./scratch/cele.xls', index=False)

###ODSUD DAL
#%%
d = pd.read_excel('./scratch/cele.xls')

def strp(val):
    return val.strip()
d[['jméno', 'příjmení']] = d[['jméno', 'příjmení']].applymap(strp)

#%%
def remove_accents(input_str):
    nfkd_form = unicodedata.normalize('NFKD', input_str)
    return u"".join([c for c in nfkd_form if not unicodedata.combining(c)])

def hex(val):
    result = hashlib.md5(val.encode())
    return result.hexdigest()

#%%
d['fotka'] = d.apply(lambda row: hex(remove_accents((row['jméno'].lower() + ' '  + row['příjmení'].lower())).replace(' ', '_').replace('.', '')) + '.jpg', axis=1)

#%%
d.columns = ['jm', 'pr', 'v', 'p', 'm', 'o', 'red', 'obr']

#%%
d.pr = d.pr.apply(lambda x: x.replace('.', '')[0] + '.')

#%%
li = list(d.to_dict(orient='index').values())

#%%
with open('./data/data.json', 'w', encoding='utf-8') as f:
    f.write(json.dumps(li, ensure_ascii=False).replace('NaN', '""'))

#%%
