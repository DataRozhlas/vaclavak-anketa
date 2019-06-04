#%%
import os
import hashlib

#%%
def hex(val):
    result = hashlib.md5(val.encode())
    return result.hexdigest()

#%%
for foto in os.listdir('./img/'):
    os.rename('./img/' + foto, './img/' + hex(foto.split('.')[0]) + '.jpg')
    #os.rename('./img/' + foto, './img/' + + )

#%%
