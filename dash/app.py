import dash
import dash_core_components as dcc
import dash_table
import dash_html_components as html
import pandas as pd
import pymongo
from pymongo import MongoClient

myclient = pymongo.MongoClient("mongodb://bigdata-mongodb-01.virtual.uniandes.edu.co:8087/")
mydb = myclient["Grupo03"]
mycol = mydb['datapregunta1']
df = pd.DataFrame(list(mycol.find()))
df2 = df.head()


app = dash.Dash(__name__)
#server = app.server

app.layout = html.Div(
    children=[
        html.H1(children="Taller 1 ME_JB_EM",),
        html.P(
            children="Primera pestaña"
            " and the number of avocados sold in the US"
            " between 2015 and 2018",
             ),
    dash_table.DataTable(
       columns=[{"name": i, "id": i} for i in df2.columns],
       data=df2.to_dict('records'),
       filter_action='native',

       style_table={
        'height': 400,
       },
       style_data={
        'width': '150px', 'minWidth': '150px', 'maxWidth': '150px',
        'overflow': 'hidden',
        'textOverflow': 'ellipsis',
      }
	),	
    ]
)

if __name__ == "__main__":
    app.run_server(debug=False,port=8050)

