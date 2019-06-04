#%%
import pandas as pd
import os
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