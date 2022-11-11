#include <iostream>
#include <conio.h>

using namespace std;

int main()
{
    int X;
    cout<<"INSIRA A QUANTIDADES DE VALORES QUE DESEJA --> ";
    cin>> X;
    int V1[X], V2[X], V3[X];

    int L=0;
    while(L<X)
    {
        cout<<"INSIRA O "<< L <<" VALOR DO PRIMEIRO VETOR: ";
        cin>>V1[L];
        L=L+1;
    }

}
