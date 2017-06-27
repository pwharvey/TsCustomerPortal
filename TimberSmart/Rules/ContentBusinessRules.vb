Imports System
Imports System.Collections.Generic
Imports System.Data
Imports System.Linq
Imports TimberSmart.Data

Namespace Rules
    
    Partial Public Class ContentBusinessRules
        Inherits TimberSmart.Rules.SharedBusinessRules

        <AccessControl("Content", "Customer_ID",
                       "select distinct CustomerID from users where username=@BusinessRules_UserName",
                       AccessPermission.Allow)>
        Public Sub PermissionCheck()
            RestrictAccess("@BusinessRules_UserName", Context.User.Identity.Name)
        End Sub

    End Class
End Namespace
