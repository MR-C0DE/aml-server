import requests

def envoyer_requete(url, donnees=None, method='GET', headers=None):
    try:
        if method == 'GET':
            response = requests.get(url, params=donnees, headers=headers)
        elif method == 'POST':
            response = requests.post(url, json=donnees, headers=headers)
        elif method == 'PUT':
            response = requests.put(url, json=donnees, headers=headers)
        elif method == 'DELETE':
            response = requests.delete(url, headers=headers)
        else:
            raise ValueError("Méthode HTTP non supportée")

        response.raise_for_status()  # Lève une exception en cas de code d'état HTTP non réussi
        
        return response.json()  # Retourne la réponse JSON de l'API

    except requests.exceptions.RequestException as e:
        print("Erreur lors de la requête :", e)
        return None

# Exemple d'utilisation
api_url = 'http://127.0.0.1:4000/utilisateurs'
donnees = {'parametre1': 'valeur1', 'parametre2': 'valeur2'}
headers = {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjkyMjk4ODQyLCJleHAiOjE2OTIzMDI0NDJ9.FByQhigBXKjWzEHkHSNIRNaITGsZ2T8Rm0zEvq1JYW8'}
cpt = 0
nbr_req = 1
while cpt < nbr_req:
    response_data = envoyer_requete(api_url, donnees, method='GET', headers=headers)

    if response_data is not None:
        print("Réponse de l'API :", response_data)
    cpt+=1
    print("FIN Réponse de l'API\n\n===================\n\n\n")
